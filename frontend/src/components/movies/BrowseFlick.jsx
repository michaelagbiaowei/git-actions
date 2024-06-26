import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from '../blogcard/BlogCard';

const BrowseFlick = () => {
    const [flicks, setFlicks] = useState([]);

    useEffect(() => {
        fetchFlicks();
    }, []);

    const fetchFlicks = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch flicks');
            }
            const data = await response.json();
            setFlicks(data);
        } catch (error) {
            console.error('Error fetching flicks:', error);
        }
    };

    return (
        <Container className="mt-5">
            <h1>Browse Flicks</h1>
            <Row className="mt-3">
                {flicks.map(movie => (
                    <Col key={movie._id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <BlogCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BrowseFlick;
