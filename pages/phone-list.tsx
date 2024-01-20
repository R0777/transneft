import Wrapper from "../components/elements/Wrapper/Wrapper";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TitleText from "../components/TitleText/TitleText";
import Container from "../components/elements/Container/Container";
import Contacts from "../components/Contacts/Contacts";

const PhoneList = () => {
  return (
    <>
      <Head>
        <title>Справочник</title>
      </Head>
      <Header />
      <Wrapper bg="url('/map.jpg') no-repeat">
        <Container>
          <TitleText
            textColor="white"
            title="Справочник сотрудников"
          />
          <Contacts />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default PhoneList;
