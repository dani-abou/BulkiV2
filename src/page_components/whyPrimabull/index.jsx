import { PrimabullBody1, PrimabullH4, PrimabullH6, PrimabullSubtitle1 } from "../../common/styles"
import PrimabullSurface from "../../components/PrimabullSurface"
import { StyledBody } from "./style"

export default function WhyPrimabull({ }) {
  return <PrimabullSurface>
    <PrimabullH4 style={{ textAlign: 'center' }}>Why Primabull?</PrimabullH4>
    <PrimabullH6 style={{ textAlign: 'center' }}>We are all about these three ideas</PrimabullH6>
    <br />
    <StyledBody>
      {`While groceries can put some grass on their packaging and say "grass-fed," you never truly know or understand how your food was raised. With Primabull, our goal is to bring you as close to the source as possible. It's as if you're always living on the farm, wherever you are.`}
    </StyledBody>
    <StyledBody>
      {`If you're here in the first place, you likely know the horrors of how industrial meat was raised. Primabull is for those who seek to honor the life of the animal by eating each, the farmers lovingly raise your beef and pork to ensure they are given a humane death.`}
    </StyledBody>
    <StyledBody>
      {`Quality vs Quantity, why not both? We enable you to not only save but plan your supply of meat for the year ahead.
      General idea for why, or "We're just three friends who are as fed up with the modern American food system as you are. Our mission is to restructure our food supply chain while connecting you with local farmers"`}
    </StyledBody>

  </PrimabullSurface>
}