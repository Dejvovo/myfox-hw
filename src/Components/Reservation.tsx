import { Button, Card, Col, Row, Typography } from "antd";
import { Calendar } from "../GraphQL/types";

const toReadableDate = (dateString: string | undefined | null) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleString();
};

export const Reservation = ({ reservation }: { reservation: Calendar }) => {
  return (
    <>
      <Card>
        <Row>
          <Col flex={1}>Logo</Col>
          <Col flex={3}>
            <Typography.Title level={5}>
              {reservation.shop?.name}
            </Typography.Title>
            <div>
              {reservation.shop?.address?.street},
              {reservation.shop?.address?.city}
            </div>
            tel {reservation.shop?.phone}
            <br />
            {reservation.carts?.map((cart) => (
              <>
                <Typography.Title level={5}>{cart.name}</Typography.Title>
                <div>{toReadableDate(reservation.from)}</div>
                <div>
                  {cart.item?.duration} minut, {cart.item?.price} Kč
                </div>
              </>
            ))}
            <Button>Trasa</Button>
            <Button>Zavolat</Button>
            <Button>Vytvořit další rezervaci</Button>
            <Button>Přidat do kalendáře</Button>
            <Button>Přidat do kontaktů</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
