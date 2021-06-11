import React from "react"
// mui
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    padding: "3rem",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem .5rem 0rem",
      marginBottom: "8rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "2rem 1rem",
    },
  },
  deco: {
    position: "relative",
    padding: "0 3rem",
    "&::before": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem",
    },
  },
  content: {
    width: "100%",
  },
  section: {
    padding: "3rem 3rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem .5rem 0",
    },
  },
  sectionHead: {
    fontSize: "1.8rem",
    fontWeight: 300,
    margin: "3rem 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "1.5rem 0",
    },
  },
  block: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    margin: "1rem 0",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
  },
}))

const PrivacyPolicyScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Privacy policy</h1>
      <div className={classes.deco}>
        <main className={classes.content}>
          <div className={classes.table}>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Preface</h3>
              <p className={classes.block}>
                TOP HONEYS located in Purmerend at Coyotestraat 12, processes
                personal data carefully, securely and reliably. We believe it is
                important that our relations, customers and suppliers have
                confidence in our organization. protect your privacy as well as
                possible The rules on protecting your privacy are laid down in
                the General Data Protection Regulation, whereby the Dutch Data
                Protection Authority supervises compliance with the law.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>What is personal data?</h3>
              <p className={classes.block}>
                Personal data is all data that can be traced back to a person.
                Examples include your name, address, telephone number and
                account number.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                When do you provide personal data to TOP HONEYS?
              </h3>
              <p className={classes.block}>
                When you order a product from TOP HONEYS, create an account via
                our website, or complete and submit a web form, you provide us
                with personal data. This concerns, for example, your name and
                address and contact details. This information is necessary to be
                able to process your orders at TOP HONEYS or to answer your
                question.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                Who is the controller for the processing of personal data?
              </h3>
              <p className={classes.block}>
                TOP HONEYS is the legal controller for the processing of
                personal data when selling products through our website. Which
                personal data does TOP HONEYS process? When you visit our
                website, make online purchases through our site, create an
                account through our website, or complete and submit a web form,
                the following data from you will be processed:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Name, address and place of
                residence;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Shipping Address;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Phone number and e-mail address;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Your account login details;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Purchase history;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;IP address;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Device data;
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                For what purposes do we use your data?
              </h3>
              <p className={classes.block}>
                We use the above-mentioned personal data for various purposes.
                These goals are as follows:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Handling orders placed through our
                website;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Order entry, order shipping, order
                tracking, invoicing and pickup;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Conducting competitions;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Sending you newsletters about
                products, offers and promotions;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Handling of returns and faults
                notifications;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Answering and handling questions;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Performing statistical analysis of
                visits and website click behavior;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;Improving the operation of our
                website.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                Does TOP HONEYS share personal data with other parties?
              </h3>
              <p className={classes.block}>
                TOP HONEYS only shares personal data with organizations that are
                involved in processing customer orders and delivering the goods.
                These are organizations for delivering orders, performing credit
                assessments, and payment providers for handling online payments.
                The external administrator of our website / webshop also has
                access to the personal data. These suppliers are our processors,
                which means that we have concluded a processing agreement.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                How do we protect personal data?
              </h3>
              <p className={classes.block}>
                TOP HONEYS uses various technical and organizational measures to
                ensure that personal data cannot be misused or otherwise end up
                in the hands of the wrong person. Examples of these measures are
                the use of encryption and training our employees in the field of
                privacy. Our site is secured with an SSL connection. An SSL
                connection ensures that people cannot read what you send to us.
                This way we ensure that your data is safe with us.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>How long do we keep data?</h3>
              <p className={classes.block}>
                TOP HONEYS will not keep the collected personal data for longer
                than is strictly necessary, or legally regulated, to realize the
                purposes for which the data was collected. We keep web forms for
                as long as the nature or content of the form requires for the
                complete answering and processing thereof. When you create an
                account, you become a registered customer of our webshop. This
                means that we draw up a customer profile in which we record your
                order history. We will keep your account and data until you
                indicate that you want it deleted. After two years of
                inactivity, you will receive an e-mail from us asking if you
                want to be a registered customer at our webshop.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                What privacy rights do you have?
              </h3>
              <p className={classes.block}>
                DiscountOffice believes it is important that our customers can
                properly exercise their rights under the law. You can use the
                following rights:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right of access: you have the
                right to inspect which personal data we process about you;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right of correction: if the
                personal data that we process about you is incorrect, you have
                the right to have it corrected;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right to erasure: if we no
                longer need your personal data for the purpose for which we
                obtained it, you have the right to ask us to delete it. There
                are a number of exceptions to this, such as a legal obligation
                to keep certain data for longer;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right to restriction: during
                the period that we are in the process of determining whether
                your data should be rectified, determining the unlawfulness of
                data processing, determining whether data should be deleted or
                you have objected to the processing, you have the right to
                request the restriction of processing;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right to data portability: at
                your request, we must transfer all personal data that we have
                about you to you or another organization of your choice. You can
                only exercise this right if the data is processed on the basis
                of permission or agreement;
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;The right to object: if we process
                data on the basis of legitimate interest or public interest, it
                is possible to object, after which a weighing of interests will
                follow. If you would like additional information about
                exercising your privacy rights, you can email us at
                office@tophoneys.com
              </p>
            </section>

            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Which cookies are placed?</h3>
              <p className={classes.block}>
                TOP HONEYS uses functional, analytical and tracking cookies. A
                cookie is a small text file that is stored in the browser of
                your computer, tablet or smartphone when you first visit this
                website.
              </p>
              <p className={classes.block}>
                TOP HONEYS uses cookies with a purely technical functionality.
                These ensure that the website works properly and that, for
                example, your preferred settings are remembered. These cookies
                are also used to make the website work properly and to be able
                to optimize it. In addition, we place cookies that keep track of
                your surfing behavior so that we can offer customized content
                and advertisements. On your first visit to our website, we have
                already informed you about these cookies and we have asked for
                your permission to place them. You can opt out of cookies by
                setting your internet browser so that it no longer stores
                cookies.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PrivacyPolicyScreen
