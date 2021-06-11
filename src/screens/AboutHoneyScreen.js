import React from "react"
// mui
import { makeStyles } from "@material-ui/core/styles"
// custom
import img1 from "../assets/honeycomb.jpeg"
import img2 from "../assets/honey-saucer.jpeg"
import img3 from "../assets/honey-jars.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    padding: "3rem",
    paddingBottom: 0,
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 1rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "1rem 0",
    },
  },
  flexContainer: {
    ...theme.typography.mont,
    ...theme.flex.row,
    alignItems: "flex-end",
    maxWidth: 1400,
    margin: "auto",
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      ...theme.flex.col,
      marginBottom: "3rem",
    },
  },
  flexContainerTop: {
    // border: "1px solid green",
    ...theme.typography.mont,
    ...theme.flex.row,
    alignItems: "flex-start",
    maxWidth: 1400,
    margin: "auto",
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      ...theme.flex.col,
      marginBottom: "2rem",
    },
  },
  flexItem: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  innerContainer: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  innerContainerDeco: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 1rem",
    },
  },
  innerContainerRight: {
    padding: "1rem 3rem 1rem 6rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 1rem",
      marginBottom: "5rem",
    },
  },
  img: {
    maxWidth: "100%",
    objectFit: "contain",
  },
  sectionHead: {
    fontSize: "1.8rem",
    fontWeight: 300,
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "1.5rem 0",
    },
  },
  block: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    margin: "1rem 0 2rem",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
  },
  list: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    margin: "1rem 0 0 3rem",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0 0",
    },
  },
}))

const AboutHoneyScreen = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>About honey</h1>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <img src={img1} alt="honey comb organic" className={classes.img} />
        </div>
        <div className={classes.flexItem}>
          <div className={classes.innerContainer}>
            <p className={classes.block}>
              Honey is one of nature's most valuable nutrients and medicinal
              substances. It consists mainly of simple sugars and is extremely
              easily absorbed by the human body.
            </p>
            <p className={classes.block}>
              In addition to carbohydrates, it contains acids, protein, enzymes,
              bactericidal substances, vitamins from group B and A, C and K, all
              amino acids and about 30 macro- and microelements (the most
              important of them are iron, manganese, cobalt and magnesium), it
              also contains inhibin, (a substance that inhibits the growth of
              bacteria and kills some of its strains). All these ingredients are
              very valuable for humans, thanks to their extraordinary properties
              (antibacterial, regenerating, detoxifying, nutritional and healing
              properties), honey strengthens the body physically and mentally,
              improves immunity and gives energy.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <div className={classes.innerContainerRight}>
            <p className={classes.block}>
              Honey is especially recommended for patients with heart disease,
              liver disease, rheumatism, anemia, underweight, poor metabolism,
              during convalescence, before operations, it strengthens the body
              of the elderly. It allows healthy people to stay fit, increases
              immunnity and strength. Honey should be consumed by children and
              adolescents, because it has a very positive effect on the body,
              increases the overall immunity of the body and improves mental
              development.
            </p>
            <p className={classes.block}>
              The advantage of bee products over synthetic products is the lack
              of side effects and the ease of absorption by the body.
            </p>
          </div>
        </div>
        <div className={classes.flexItem}>
          <img src={img2} alt="saucer with honey" className={classes.img} />
        </div>
      </div>

      <div className={classes.flexContainerTop}>
        <div className={classes.flexItem}>
          <div className={classes.innerContainerRight}>
            <p className={classes.sectionHead}>Can honey go bad?</p>
            <p className={classes.block}>
              The answer is quite simple: if it's real and pure, it won't spoil
              for many years. Hydrogen peroxide is responsible for its amazing
              durability. This substance is the result of the oxidation of
              glucose to glulonic acid. We owe this reaction to the bees. This
              process is possible thanks to a special enzyme called invertase,
              contained in bees' saliva. Additional protection is provided by
              flavonoids - these are compounds with fungicidal, antibacterial
              and antioxidant properties.
            </p>
            <p className={classes.block}>
              Be careful though, you can easily spoil the honey yourself. It
              often happens when we put a knife or a teaspoon in a jar of honey
              with the remnants of other substances, such as butter or jam. In
              fact, they can go bad, giving an entire jar of honey a bad taste
              and spoiling it forever.
            </p>
          </div>
        </div>
        <div className={classes.flexItem}>
          <div className={classes.innerContainerRight}>
            <p className={classes.sectionHead}>
              What to do when honey cristalizes?
            </p>
            <p className={classes.block}>
              It doesn't mean there is something wrong with your honey. Simply
              heat it up a bit (being very careful about the temperature that
              destroys the valuable properties of honey), it will change its
              consistency to a liquid.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.flexContainerTop}>
        <div className={classes.flexItem}>
          <img src={img3} alt="organic honey in jars" className={classes.img} />
        </div>
        <div className={classes.flexItem}>
          <div className={classes.innerContainerRight}>
            <p className={classes.sectionHead}>Recomended dosage</p>
            <p className={classes.block}>
              Prophylactic dosage: 1 tablespoon once a day.
              <br />
              Nutritional and therapeutic dosage: 1-3 tablespoons 3 times a day.
            </p>
            <p className={classes.block}>
              The doses for children are the same, but the portions are in
              teaspoons. (a tablespoon is approx. 20 g of honey, a flat teaspoon
              is approx. 5 g of honey) It is not recommended to give the honey
              for children under 1 year of age.
            </p>
            <p className={classes.sectionHead}>Honey water</p>
            <p className={classes.block}>
              The effect of honey increases when it is dissolved in water: 1-2
              tablespoons of honey in a glass of lukewarm, boiled water. Leave
              it covered in a dark place in a room temperature for 12 hours. It
              is recommended to drink honey every morning on an empty stomach
              and in the evening before bedtime.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutHoneyScreen
