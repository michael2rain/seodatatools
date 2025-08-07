import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Signup2Props {
    heading?: string;
    logo: {
        url: string;
        src: string;
        alt: string;
        title?: string;
    };
    buttonText?: string;
    googleText?: string;
    signupText?: string;
    signupUrl?: string;
}

const Signup2 = ({
    heading = "Signup",
    logo = {
        url: "/",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
        alt: "logo",
        title: "s",
    },
    buttonText = "Crear cuenta",
    signupText = "¿Ya tienes una cuenta?",
    signupUrl = "/login",
}: Signup2Props) => {
    return (
        <section className="bg-muted h-screen">
            <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-6 lg:justify-start">
                    {/* Logo */}
                    <a href={logo.url}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            title={logo.title}
                            className="h-10 dark:invert"
                        />
                    </a>
                    <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                        {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
                        <div className="flex w-full flex-col gap-2">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="Email"
                                className="text-sm"
                                required
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Password"
                                className="text-sm"
                                required
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <Label>Confirm Password</Label>
                            <Input
                                type="password"
                                placeholder="Password"
                                className="text-sm"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            {buttonText}
                        </Button>
                    </div>
                    <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                        <p>{signupText}</p>
                        <a
                            href={signupUrl}
                            className="text-primary font-medium hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Signup2 };
