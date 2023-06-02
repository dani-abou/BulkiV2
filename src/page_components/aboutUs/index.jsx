import { PrimabullBody1, PrimabullH4, PrimabullH6, PrimabullSubtitle1 } from "../../common/styles"
import PrimabullSurface from "../../components/PrimabullSurface"
import { StyledBody } from "./style"

export default function AboutUs({ }) {
  return <PrimabullSurface>
    <PrimabullH4 style={{ textAlign: 'center' }}>What is Primabull?</PrimabullH4>
    <StyledBody>Primabull is an online farmers market. We are dedicated to providing the highest quality local foods including beef, pork, chicken, raw dairy, and raw honey. We are decentralized which means that any local, American farm can post their products on our site. They just need to pass our simple verification process to make sure that they 1. Are a legitimate local farm who raises and sells their own products 2. Meet all food safety requirements issued by the USDA and 3. Adhere to their own listed quality standards. For example, if a farmer labels their product as grass-fed, grass-finished they need to verify that this is true.</StyledBody>
    <br />
    <br />
    <PrimabullH4 style={{ textAlign: 'center' }}>Why Primabull?</PrimabullH4>

    <StyledBody>Join the meat revolution! We are tired of the factory farmed “meat” they feed us at the grocery store and want to take our health and our food supply back. The best way to do that is by supporting your local farmer.</StyledBody>
    <StyledBody>1. The Healthy Choice: meat sold on Primabull is locally grown and pasture raised. We verify any products on our site that are labeled “Grass-fed, Grass-finished, Grain-Fed, Grain-finished, humanely-raised, pasture-raised, etc.” So if you are buying grass-fed, grass-finished beef on our site, you can trust that it is actually grass-fed and grass-finished. Many grocery stores both online and in person like to play with the wording and label meat “grass-fed,” when it is not necessarily grass-finished (and sometimes not even grass-fed at all). How do we verify? We visit each and every farmer in person to see their operation and document it. We record how the farm operates and manages its livestock throughout all seasons in the year.</StyledBody>
    <StyledBody>2. Decentralize our food supply: our site is set up to give you the most direct access to a local farm through an online platform. The network is built upon many local American farms spread throughout the country. This is different from the standard meat industry who buy 80% of their beef from overseas and source the other 20% from a handful of centralized, factory farming operations. </StyledBody>


  </PrimabullSurface>
}