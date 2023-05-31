import styled from "styled-components"

const screenSizes = {
  mobile: {
    min: "320px",
    max: "480px"
  },
  tablet: {
    min: "481px",
    max: "950px"
  },
  laptop: {
    min: "950px",
    max: "1200px"
  },
  desktop: {
    min: "1200px",
    max: "1500px"
  }
}

const query = (styles, min, max) => `@media screen and (max-width: ${max}) and (min-width: ${min}) {
  ${styles}
  }
`

let media = {}

Object.keys(screenSizes).forEach(key => {
  media[key] = styles => query(styles, screenSizes[key].min, screenSizes[key].max)
})

const Mobile = styled.div`
  /* display: none; */
  ${() => media.mobile(`
    display: inline;
  `)}
`

const Tablet = styled.div`
  display: none;
  ${() => media.tablet(`
    display: inline;
  `)}
`

export { media, screenSizes, Mobile, Tablet }
