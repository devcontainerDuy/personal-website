import { useState } from "react";
import "./App.css";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";
import Badge from "./components/ui/Badge";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Hello Vite + React! {count}</h1>
                <Badge href="!bou">HTML</Badge>
                <Divider className="mx-auto mb-4 w-3/12" vertical={false} />
                <div className="flex gap-4 items-center">
                    <Button variant="primary" size="lg" onClick={() => setCount(count + 1)}>
                        Click Me
                    </Button>

                    <Button variant="outline" size="lg" onClick={() => setCount(count - 1)}>
                        Click Me
                    </Button>
                </div>
                <div className="my-4">
                    <Input type="text" placeholder="Enter your text" size="md" variant="primary" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <Card className="mt-4 p-4" variant="outline" hoverEffect={true}>
                    <h2 className="text-2xl font-bold">Card Title</h2>
                    <p className="text-ellipsis">This is a card component.</p>
                    <Button variant="secondary" size="sm" className="mt-2">
                        Card Button
                    </Button>
                </Card>
            </div>
        </>
    );
}

export default App;
