import React, { Component } from "react";
import {
  Button,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

class CardsPage extends Component {
  render() {
    return (
      <Container>

          <CardGroup deck className="mt-3">
            <Card>
              <CardImage
                src="https://mundocontact.com/wp-content/uploads/internet_de_todo1.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Innovación</CardTitle>
                <CardText>
                Tecsup es una institución de Educación Superior
                dedicada a formar profesionales en tecnología 
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://blog.cambridge.es/wp-content/uploads/2017/06/inteligencias-multiples-2.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Cultura</CardTitle>
                <CardText>
                  La Cultura de tecsup se caracterisa por ser muy extensa ya que nuestros 
                  estudiantes 
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mundocontact.com/wp-content/uploads/2015/11/inteligencia-artificial-mente-cerebro-chip-futuro.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Pasion</CardTitle>
                <CardText>
                 Tecsup se caracterisa por tener una pasion muy grande
                 por la tecnologia
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
    );
  }
}

export default CardsPage;
