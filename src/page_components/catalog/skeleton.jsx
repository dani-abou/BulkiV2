import { Grid } from "@mui/material";
import { colors } from "../../common/styles/theme";
import { StyledImageDiv } from "../../components/BulkiCard/style";
import { StyledFiltersContainer, StyledLoadingCard, StyledResultsContainer, StyledSearchFlex, StyledSkeleton } from "./style";

const SKELETON_COLOR = { bgcolor: colors.onSurface.lighten(0.1).alpha(0.5).hexa() };
const NUMBER_OF_RESULTS = 10;

const CatalogSkeleton = () => {
  return <StyledSearchFlex>
    <StyledFiltersContainer>
      <StyledSkeleton
        variant="rectangular"
        animation="wave"

        sx={SKELETON_COLOR} />
    </StyledFiltersContainer>
    <StyledResultsContainer>
      <Grid container spacing={2}>
        {
          [...Array(NUMBER_OF_RESULTS)].map((el, index) =>
            <Grid item key={index} xs={4} sm={4} md={4} lg={3} xl={2.4} xxl={2}>
              <StyledLoadingCard>
                <StyledImageDiv>
                  <StyledSkeleton variant="rectangular"
                    animation={false}
                    sx={SKELETON_COLOR} />
                </StyledImageDiv>
              </StyledLoadingCard>
            </Grid>
          )
        }
      </Grid>
    </StyledResultsContainer>
  </StyledSearchFlex>
}

export default CatalogSkeleton;