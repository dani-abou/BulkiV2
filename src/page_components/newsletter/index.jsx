import { Card, CardMedia, CircularProgress } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { useMemo, useState } from "react";
import app from "../../../firebaseConfig";
// import logo from "../../../public/BulkiLogo.png";
import logo from "../../../public/BulkiLogo.png";
import sendMail from "../../api/mailer";
import newsletterSignup from "../../api/newsletter/signup";
import { BulkiH4, BulkiH5 } from "../../common/styles";
import { isValidEmail } from "../../common/utils";
import BulkiButton from "../../components/BulkiButton";
import BulkiCard from "../../components/BulkiCard/BulkiCard";
import BulkiInput from "../../components/BulkiInput";
import { StyledExamplesFlex, StyledExamplesPaper, StyledFormDiv, StyledLogoDiv, StyledSection, StyledSurface } from "./style";

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [helperText, setHelperText] = useState()
  const [status, setStatus] = useState()

  const [contactEmail, setContactEmail] = useState('')
  const [contact, setContact] = useState('')
  const [contactStatus, setContactStatus] = useState()
  const [contactHelperText, setContactHelperText] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setHelperText('Please enter a valid email')
    } else if (status !== 'added') {
      setStatus('loading')
      await newsletterSignup(email, fName, lName)
      setStatus('added')
    }
  }

  const onSubmitContact = async (e) => {
    e.preventDefault();
    if (!isValidEmail(contactEmail)) {
      setContactHelperText('Please enter a valid email')
    }
    else if (contactStatus !== 'sent') {
      setContactHelperText('')
      setContactStatus('loading')
      await sendMail([process.env.NEXT_PUBLIC_CONTACT_EMAIL], `Contact form submission: ${contactEmail}`, contact);
      setContactStatus('sent')
    }
  }

  const onChange = (e) => {
    if (helperText) setHelperText();
    setEmail(e.target.value)
  }

  return <StyledSurface>
    <StyledSection>
      <StyledLogoDiv>
        <Image
          src='/BulkiLogo.png'
          alt='BulkiLogo'
          fill
        />
      </StyledLogoDiv>
      <BulkiH5 style={{ textAlign: 'center' }}>We connect small farmers to people who want fresh meat</BulkiH5>
    </StyledSection>
    <StyledSection>
      <StyledExamplesFlex>
        {examples.map((example, index) => (
          <StyledExamplesPaper image={example.src} header={example.title} key={index}>
            {example.description}
          </StyledExamplesPaper>
        )
        )}
      </StyledExamplesFlex>
    </StyledSection>
    <StyledSection $greyed>
      <br /><br />
      <StyledFormDiv onSubmit={onSubmit}>
        <BulkiH5 style={{ textAlign: 'center' }}>Join the newsletter to be the first to know!</BulkiH5>
        <div style={{ display: 'flex', gap: '10px' }}>
          <BulkiInput
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            label='First Name'
          />
          <BulkiInput
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            label='Last Name'
          />
        </div>
        <BulkiInput
          value={email}
          onChange={onChange}
          helperText={helperText}
          error={!(!helperText)}
          label='Email Address'
          required
        />
        <BulkiButton type='submit' disabled={status === 'loading'}
          style={{ height: '36.5px' }}
        >
          {!status ? 'Sign me up!' :
            status === 'added' ? 'Added :)' :
              <CircularProgress style={{ color: 'lightgray', width: '20px', height: '20px' }} />
          }
        </BulkiButton>

      </StyledFormDiv>
    </StyledSection>

    <StyledSection>
      <StyledFormDiv onSubmit={onSubmitContact}>
        <br />
        <BulkiH5>Contact Us</BulkiH5>
        <BulkiInput
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          label='Your Email Address'
          required
          helperText={contactHelperText}
          error={!(!contactHelperText)}
        />
        <BulkiInput
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          multiline
          inputProps={{ style: { padding: '10px' } }}
          rows={4}
          label='Speak your mind!'
        />
        <BulkiButton type='submit' disabled={contactStatus === 'loading'}
          style={{ height: '36.5px' }}>
          {contactStatus === 'loading' ? <CircularProgress style={{ color: 'lightgray', width: '20px', height: '20px' }} /> :
            contactStatus === 'sent' ? 'sent :)' :
              'Submit'
          }
        </BulkiButton>
      </StyledFormDiv>
    </StyledSection>
  </StyledSurface>
}

export const examples = [
  {
    title: 'Pork Freeze Filler',
    farm: 'Four Mile River Farm',
    price: 299,
    src: 'https://firebasestorage.googleapis.com/v0/b/bulki-aa26c.appspot.com/o/landingPage%2FbeefFiller.jpg?alt=media&token=a17c9942-3aa4-4912-9429-2c9eee674835',
    description: `4lbs Breakfast sausage Patties\n
4lbs Ground Pork\n
4lbs Boneless country style Ribs\n
3lbs Smoked Bacon\n
1 Small Boneless smoked Ham\n
12 Boneless Pork Chops`
  },
  {
    title: 'Beef Freezer Filler',
    farm: 'Four Mile River Farm',
    price: 599,
    src: 'https://firebasestorage.googleapis.com/v0/b/bulki-aa26c.appspot.com/o/landingPage%2FbeefFiller.jpg?alt=media&token=a17c9942-3aa4-4912-9429-2c9eee674835',
    description: `
24lbs ground beef \n
1 Roast(Eye, Chuck or Top Round)\n
2 Shank Packages(Soup Bones)\n
2 Stew Meat Packages\n
1 of the following: Brisket or Short Ribs\n
1 Sirloin Tip\n
1 Sirloin\n
2-3 Ribeye\n
2 Filet Mignon\n
3 New York Strip\n
1 of the following: Flank, Skirt or Flap Steak`
  },
  {
    title: 'Bulki Ground Beef',
    farm: 'Four Mile River Farm',
    price: 135,
    src: 'https://firebasestorage.googleapis.com/v0/b/bulki-aa26c.appspot.com/o/landingPage%2FbeefFiller.jpg?alt=media&token=a17c9942-3aa4-4912-9429-2c9eee674835',
    description: `15lbs of individually packaged ground beef`
  }
]