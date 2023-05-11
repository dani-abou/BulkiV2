import { BulkiBody1, BulkiH4, BulkiH6, BulkiSubtitle1 } from "../../common/styles"
import BulkiSurface from "../../components/BulkiSurface"
import { StyledBody } from "./style"

export default function WhyBulki({ }) {
  return <BulkiSurface >
    <BulkiH4 style={{ textAlign: 'center' }}>Why Bulki?</BulkiH4>
    <BulkiH6 style={{ textAlign: 'center' }}>We are all about these three ideas</BulkiH6>
    <br />
    <StyledBody>
      {`While groceries can put some grass on their packaging and say "grass-fed," you never truly know or understand how your food was raised. With Nativemeats, our goal is to bring you as close to the source as possible. It's as if you're always living on the farm, wherever you are.`}
    </StyledBody>
    <StyledBody>
      {`If you're here in the first place, you likely know the horrors of how industrial meat was raised. Nativemeats is for those who seek to honor the life of the animal by eating each, the farmers lovingly raise your beef and pork to ensure they are given a humane death.`}
    </StyledBody>
    <StyledBody>
      {`Quality vs Quantity, why not both? We enable you to not only save but plan your supply of meat for the year ahead.
      General idea for why, or "We're just three friends who are as fed up with the modern American food system as you are. Our mission is to restructure our food supply chain while connecting you with local farmers"`}
    </StyledBody>

  </BulkiSurface>
}