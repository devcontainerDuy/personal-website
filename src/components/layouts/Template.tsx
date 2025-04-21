import Header from "@/components/layouts/Header";
import Background from "@/components/common/Background";

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
                <Background/>
                <Header />
                <main className="relative z-10 w-full">{children}</main>
            </div>
        </>
    );
};

export default Template;
