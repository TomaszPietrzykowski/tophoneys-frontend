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
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
    },
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
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
  // emphasis: {
  //   color: theme.palette.text.primary,
  // },
}))

const GenralConditionsScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>General conditions</h1>
      <div className={classes.deco}>
        <main className={classes.content}>
          <div className={classes.table}>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Regulations</h3>
              <p className={classes.block}>
                {/* <span className={classes.emphasis}>1. TOPHONEY</span> */}
                1. TOPHONEY online store, available at the internet address
                tophoneys.com is run by Grzegorz Dabrowski running a business
                under the name GD TOP, entered into the Kamer van Kophandel run
                by the minister responsible for the economy of KvK 82891087
              </p>
              <p className={classes.block}>
                2. These regulations are addressed to Consumers and define the
                rules and procedure for concluding a Distance Sale Agreement
                with the Consumer via the Store.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>§ 1. Definitions</h3>
              <p className={classes.block}>
                1. Consumer - a natural person concluding a contract with the
                Seller as part of the Store, the subject of which is not
                directly related to its business or professional activity.
              </p>
              <p className={classes.block}>
                2. Seller - a natural person running a business under the name
                GD TOP, entered in the Central Register and Information on
                Economic Activity kept by the minister competent for economy,
                BTW (VAT) - BTW VAT , KvK number 82891087
              </p>
              <p className={classes.block}>
                3. Customer - each entity making purchases through the Store.
              </p>
              <p className={classes.block}>
                4. Entrepreneur - a natural person, a legal person and an
                organizational unit that is not a legal person, the separate law
                of which grants legal capacity, performing on its own behalf an
                economic activity that uses the Store.
              </p>
              <p className={classes.block}>
                5. Store - an online store run by the Seller at the Internet
                address Tophoneys.com
              </p>
              <p className={classes.block}>
                6. Distance contract - contract concluded with the Customer as
                part of an organized system of concluding distance contracts (as
                part of the Store), without the simultaneous physical presence
                of the parties, with the sole use of one or more means of
                distance communication up to and including the conclusion of the
                contract.
              </p>
              <p className={classes.block}>
                7. Regulations - these Store regulations.
              </p>
              <p className={classes.block}>
                8. Order - the Customer's declaration of will submitted via the
                Order Form and aimed directly at concluding the Product Sales
                Agreement or Products with the Seller.
              </p>
              <p className={classes.block}>
                9. Account - customer account in the Store, it contains data
                provided by the customer and information about orders placed by
                him in the store.
              </p>
              <p className={classes.block}>
                10. Registration form - a form available in the Store, enabling
                the creation of an Account.
              </p>
              <p className={classes.block}>
                11. Order form - an interactive form available in the Store that
                allows placing an Order, in particular by adding Products to the
                Cart and defining the terms of the Sales Agreement, including
                the method of delivery and payment.
              </p>
              <p className={classes.block}>
                12. Cart - an element of the Store's software, in which the
                Products selected for purchase are visible, and it is also
                possible to determine and modify the Order data, in particular
                the quantity of products.
              </p>
              <p className={classes.block}>
                13. Product - a movable item / service available in the Store
                which is the subject of the Sales Agreement between the Customer
                and the Seller.
              </p>
              <p className={classes.block}>
                14. Sales Agreement - a Product sales contract concluded or
                concluded between the Customer and the Seller via the Online
                Store. The Sales Agreement also means - in accordance with the
                Product features - a contract for the provision of services and
                a contract for specific work.
              </p>
            </section>

            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 2. Contact with the Store
              </h3>
              <p className={classes.block}>
                1. Seller's address: Coyotestraat 12, 1448WE Purmerend
              </p>
              <p className={classes.block}>
                2. Seller's e-mail address: info@tophoneys.com
              </p>
              <p className={classes.block}>
                3. Seller's telephone number: 06 28753850
              </p>
              <p className={classes.block}>
                4. Seller's bank account number: GD TOP NL00 3744 8248 83
              </p>
              <p className={classes.block}>
                5. The Customer may communicate with the Seller using the
                addresses and telephone numbers provided in this paragraph.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 3. Technical requirements
              </h3>
              <p className={classes.block}>
                To use the Store, including viewing the Store's assortment and
                placing orders for Products, you must have:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. a device with internet
                access and a web browser,
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. an active e-mail account,
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. cookies enabled.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>§ 4. Supply</h3>
              <p className={classes.block}>
                1. The Seller starts processing the order at the time of payment
                by the Buyer.
              </p>
              <p className={classes.block}>
                2. Shipment of goods is carried out within 24 hours from the
                commencement of the contract.
              </p>
              <p className={classes.block}>
                3. The ordered goods are delivered to the Buyer's address
                indicated when placing the order.
              </p>
              <p className={classes.block}>
                4. The delivery is carried out in the territory of the
                Netherlands.
              </p>
              <p className={classes.block}>
                5. The delivery takes place only on working days.
              </p>
              <p className={classes.block}>
                6. The seller makes shipment via mail:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Post NL
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. DHL
              </p>
              <p className={classes.block}>
                7. Together with the goods, the Buyer is provided with a sales
                receipt. At the request of the Buyer, the Seller shall deliver
                the invoice to the Buyer.
              </p>
              <p className={classes.block}>
                8. The Seller is obliged to provide the Buyer with goods free
                from defects.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 5. Creating an Account in the Store
              </h3>
              <p className={classes.block}>
                1. To create an Account in the Store, you must complete the
                Registration Form. It is necessary to provide user name, valid
                e-mail address, and password of choice
              </p>
              <p className={classes.block}>
                2. Creating an Account in the Store is free.
              </p>
              <p className={classes.block}>
                3. Logging in to the Account is done by entering email address
                and password set in the Registration Form.
              </p>
              <p className={classes.block}>
                4. The Customer may at any time, without giving a reason and
                without incurring any fees, delete the Account by sending an
                appropriate request to the Seller, in particular via e-mail or
                in writing to the addresses provided in §3.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 6. Rules for placing an Order
              </h3>
              <p className={classes.block}>In order to place an Order:</p>
              <p className={classes.block}>
                1. Select the Products that are the subject of the Order by
                clicking "Add to Cart" button
              </p>
              <p className={classes.block}>
                2. Go to the Cart page and click "Checkout" button
              </p>
              <p className={classes.block}>
                3. Optional: Log in. Shopping as a logged in user will give you
                possibility of reviwing your order details and status in user
                profile page. If you are already logged in this step will be
                skipped. You may also choose guest shopping option.
              </p>
              <p className={classes.block}>
                4. Enter or confirm shipping address
              </p>
              <p className={classes.block}>
                5. Review your order details and click "Place Order" button
              </p>
              <p className={classes.block}>
                6. Choose payment method and pay. If you are shopping as a
                logged in user you may pay your order later. After your order
                has been placed you may find it in your user profile and finish
                checkout procedure. Your order should be however paid within a
                specified period, subject to §8 point 3.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 7. Delivery and payment methods offered
              </h3>
              <p className={classes.block}>
                1. The Customer may use the following methods of delivery or
                collection of the ordered Product:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;a. Courier delivery,
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;b. Pickup in person available at:
                Coyotestraat 12, 1448 WE Purmerend
              </p>
              <p className={classes.block}>
                2. The customer can use the following payment methods:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;a. Payment on delivery
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;b. Payment by bank transfer to the
                Seller's account
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;c. Electronic payments (Paypal, iDEAL,
                Credit Card)
              </p>
              <p className={classes.block}>
                3. Detailed information on delivery methods and acceptable
                payment methods can be found on the Store's website.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 8. Execution of the sales contract
              </h3>
              <p className={classes.block}>
                1. The conclusion of the Sales Agreement between the Customer
                and the Seller takes place after the Customer has placed an
                Order during checkout process in the Online Store in accordance
                with §6 i 7 of the Regulations.
              </p>
              <p className={classes.block}>
                2. After placing the Order, the Seller immediately confirms its
                receipt and at the same time accepts the Order for execution.
                Confirmation of receipt of the Order and its acceptance for
                implementation takes place by sending the Customer an
                appropriate e-mail to the Customer's e- mail address provided
                when placing the Order, which contains at least the Seller's
                declaration of receipt of the Order and its acceptance for
                implementation and confirmation of the conclusion of the Sales
                Agreement. Upon receipt of the above e-mail by the Customer, a
                Sales Agreement is concluded between the Customer and the
                Seller.
              </p>
              <p className={classes.block}>3. If the Customer chooses:</p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;a. payment by bank transfer, electronic
                payments, the Customer is obliged to make the payment within 2
                calendar days from the date of the Sales Agreement - otherwise
                the order will be canceled.
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;b. cash payment upon personal collection
                of the parcel, the Customer is obliged to make the payment upon
                personal collection of the parcel.
              </p>
              <p className={classes.block}>
                4. If the Customer has chosen a delivery method other than
                personal collection, the Product will be sent by the Seller
                within the time specified in its description (subject to
                paragraph 5 of this paragraph), in the manner chosen by the
                Customer when placing the Order.
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp; a. In the case of ordering Products
                with different delivery dates, the delivery date is the longest
                given date.
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp; b. In the case of ordering Products
                with different delivery times, the Customer has the option to
                request delivery of the Products in parts or to deliver all
                Products after completing the entire order.
              </p>
              <p className={classes.block}>
                5. The start of the period for delivery of the Product to the
                Customer is counted as follows: If the Customer chooses the
                method of payment by bank transfer, electronic payments - from
                the date of crediting the Seller's bank account.
              </p>
              <p className={classes.block}>
                6. If the Customer chooses to collect the Product in person, the
                Product will be ready for collection by the Customer within the
                time specified in the Product description. The Customer will be
                additionally informed by the Seller about the readiness of the
                Product for collection by sending an appropriate e-mail to the
                Customer's e-mail address provided when placing the Order.
              </p>
              <p className={classes.block}>
                7. In the case of ordering Products with different terms of
                readiness for collection, the term of readiness for collection
                is the longest given date.
              </p>
              <p className={classes.block}>
                8. The delivery of the Product to the Customer is payable,
                unless the Sales Agreement provides otherwise. Product delivery
                costs (including charges for transport, delivery and postal
                services) are indicated to the Customer on the Online Store's
                website in the "Delivery costs" tab and when placing the Order,
                including when the Customer expresses his will to be bound by
                the Sales Agreement.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 9. Complaint and warranty
              </h3>
              <p className={classes.block}>
                1. The Sales Agreement covers new Products.
              </p>
              <p className={classes.block}>
                2. The customer has the right to file the complaint for the
                purchased product if it has hidden defects or if it is damaged
                (poured out, distracted). In such cases, please take photos and
                contact us immediately (on the day of delivery, receipt of the
                product) to the e-mail address: dabrowskigrzegorz0@gmail.com
              </p>
              <p className={classes.block}>
                3. Goods returned as part of the complaint procedure should be
                sent to the following address: GD TOP Coyotestraat 12, 1448WE
                Purmerend
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>
                § 10. Personal data in the Online Store
              </h3>
              <p className={classes.block}>
                1. The administrator of personal data of Customers collected via
                the Online Store is the Seller.
              </p>
              <p className={classes.block}>
                2. Customers' personal data collected by the administrator via
                the Online Store is collected in order to implement the Sales
                Agreement, and if the Customer agrees - also for marketing
                purposes.
              </p>
              <p className={classes.block}>
                3. The recipients of personal data of the Customers of the
                Online Store may be:
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;a. In the case of a Customer who uses
                the Online Store with the method of delivery by post or courier,
                the Administrator provides the Customer's collected personal
                data to the selected carrier or intermediary performing the
                shipment at the request of the Administrator.
              </p>
              <p className={classes.block}>
                &nbsp;&nbsp;&nbsp;&nbsp;b. In the case of a Customer who uses
                the Online Store with the method of electronic payments or with
                a payment card, the Administrator provides the collected
                personal data of the Customer to the selected entity servicing
                the above payments in the Online Store.
              </p>
              <p className={classes.block}>
                4. The customer has the right to access their data and correct
                them.
              </p>
              <p className={classes.block}>
                5. Providing personal data is voluntary, but failure to provide
                the personal data indicated in the Regulations necessary to
                conclude a Sales Agreement results in the inability to conclude
                this contract.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>§ 11. Final Provisions</h3>
              <p className={classes.block}>
                1. Agreements concluded through the Online Store are concluded
                in Polish and English
              </p>
              <p className={classes.block}>
                2. The Seller reserves the right to amend the Regulations for
                important reasons, that is: changes in the law, changes in
                payment and delivery methods - to the extent to which these
                changes affect the implementation of the provisions of these
                Regulations. The Seller will inform the Customer about each
                change at least 7 days in advance.
              </p>
              <p className={classes.block}>
                3. The Seller, to the fullest extent permitted by law, shall not
                be liable for any disruptions, including interruptions in the
                functioning of the Store, caused by force majeure, unlawful
                actions of third parties or incompatibility of the Online Store
                with the Customer's technical infrastructure.
              </p>
              <p className={classes.block}>
                4. Viewing the Store's assortment does not require creating an
                Account. Placing orders by the Customer for Products in the
                Store's assortment is possible either after creating an Account
                in accordance with the provisions of §6 of the Regulations or by
                providing the necessary personal and address data enabling the
                Order to be completed without creating an Account. The prices
                given in the Store are given in Euro and are gross prices
                (including VAT).
              </p>
              <p className={classes.block}>
                5. The final amount to be paid by the Customer ("Total")
                consists of the price for the Product and the cost of delivery
                (including fees for transport, delivery and postal services),
                about which the Customer is informed on the Store's website when
                placing the Order, including the moment of expressing the will
                to be bound by the Sales Agreement.
              </p>
              <p className={classes.block}>
                6. When the nature of the subject of the Agreement does not
                allow, judging reasonably, to calculate the final ("Total")
                price in advance, information on the manner in which the price
                will be calculated, as well as charges for transport, delivery,
                postal services and other costs will be given in the Store in
                the Product description.
              </p>
              <p className={classes.block}>
                7. The processing of the Buyer's personal data by the Seller is
                aimed at the correct execution of orders and the delivery of
                goods.
              </p>
              <p className={classes.block}>
                8. With the express consent of the Buyer, the Seller may process
                his personal data for information and marketing purposes.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default GenralConditionsScreen
