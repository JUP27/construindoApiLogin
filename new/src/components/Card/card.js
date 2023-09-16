import { Card } from "./cardStyled";

function MyCard({i,title,content}) {
    return(
        <Card key={i}>
            <h2>{title}</h2>
            <p>{content}</p>
        </Card>
    )
};

export default MyCard; 