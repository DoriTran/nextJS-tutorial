import Card from "@/components/card";

const Comments = async () => {
  const response = await fetch('http://localhost:3000/comments/api');
  const data = await response.json();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15}}>
      {
        data.map((each: { id: string; text: string }) => <Card key={each.id}>{each.text}</Card>)
      }
    </div>
  )
}

export default Comments;