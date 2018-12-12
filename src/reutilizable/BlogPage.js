import React  from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';

const BlogPage = () => {
    return (
        <Container>
            <h2 className="h1-responsive font-weight-bold text-center my-5">Gestor de contenido</h2>
            <p className="text-center w-responsive mx-auto mb-5">
            Nuestro proceso de enseñanza-aprendizaje responde a 
            las características de los jóvenes de hoy.
            Es por ello que nos aseguramos que:
            Nuestros docentes apliquen metodologías activas y TIC.
            Nuestros estudiantes trabajen en modernos laboratorios 
            y talleres, desarrollen proyectos multidisciplinarios y
             participen en actividades deportivas y culturales.
            Participen en experiencias académicas internacionales.
            </p>
            <Row>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" src="https://www.tecsup.edu.pe/sites/default/files/page/image/historia-tecsup.png" alt="imagen"/>
                        <Mask overlay="white-slight" />
                    </View>
                    <h6 className="font-weight-bold mb-3 pink-text">
                        <Fa icon="map" className="pr-2"></Fa>Aventura</h6>
                    <h4 className="font-weight-bold mb-3"><strong> Tecsup creado</strong></h4>
                    <Button  type="button" color="pink" rounded size="md">Tecsup</Button>
                </Col>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" src="https://www.tecsup.edu.pe/sites/default/files/page/image/acerca-de-tecsup.png" alt="imaginacion"/>
                        <Mask overlay="white-slight" />
                    </View>
                    <h6 className="font-weight-bold mb-3 deep-orange-text">
                        <Fa icon="graduation-cap" className="pr-2"></Fa>Educacion</h6>
                    <h4 className="font-weight-bold mb-3"><strong>Mejores de Perú</strong></h4>
                    <Button color="deep-orange" rounded size="md">Read more</Button>
                </Col>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" alt="imaginaciones" src="https://www.isotools.org/wp-content/uploads/2014/09/BSC-15-sep.jpg" />
                        <Mask overlay="white-slight" />
                    </View>
                    <h6 className="font-weight-bold mb-3 blue-text">
                        <Fa icon="fire" className="pr-2"></Fa>Cultura</h6>
                    <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
                    <Button color="info" rounded size="md">Read more</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default BlogPage;