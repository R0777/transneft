
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Header from "../components/Header/Header";
import TitleText from "../components/TitleText/TitleText";
import Container from "../components/elements/Container/Container";
import UserProfile from "../components/UserProfile/UserProfile";
import Wrapper from "../components/elements/Wrapper/Wrapper";
import styles from "../components/UserProfile/styles.module.scss"

const About = () => {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
      </Head>
      <Header />
      <Wrapper bg="url('/about-bg.jpg') no-repeat">
      <Container>
        <TitleText
          title="Личный кабинет сотрудника"
        />
        <UserProfile/>
      </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default About;
