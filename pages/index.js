import Head from "next/head";
import MyBody from "../components/MyBody";
import ShowLogInProvider from "./contexts/showLogIn";
import ShowSignUpProvider from "./contexts/showSignUp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>pintrest</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.28.4/sweetalert2.min.css"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.28.4/sweetalert2.all.min.js"
          integrity="sha256-qtyU+b249rw/5PQ1KXGRtxjlgg6hfU2EK50YOlc0n50="
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ShowSignUpProvider>
        <ShowLogInProvider>
          <MyBody />
        </ShowLogInProvider>
      </ShowSignUpProvider>
    </div>
  );
}
