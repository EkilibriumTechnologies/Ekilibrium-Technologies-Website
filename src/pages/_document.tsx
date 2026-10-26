import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";
import { cn } from "@/lib/utils";

type DocumentProps = DocumentInitialProps & {
  language: "en" | "es";
};

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const language = ctx.pathname === "/es" ? "es" : "en";
    return { ...initialProps, language };
  }

  render() {
    return (
      <Html lang={this.props.language}>
        <Head>
          <link rel="icon" href="/Meditative_Metallic_Logo_Design.png" />
        </Head>
        <body
          className={cn(
            "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
