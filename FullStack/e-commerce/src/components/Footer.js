import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "@emotion/styled";

const StyledLink = styled(Link)({
  textDecoration: "none",
});

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f3f3",
        padding: "20px 0",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Store Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              500 Terry Francine Street
              <br />
              San Francisco, CA 94158
              <br />
              info@mysite.com
              <br />
              123-456-7890
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                marginTop: 1,
              }}
            >
              <IconButton href="https://www.instagram.com" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.twitter.com" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com" color="inherit">
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <StyledLink href="#" color="inherit" display="block">
              Shop All
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Category1
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Category2
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Category3
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Category4
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Category5
            </StyledLink>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Customer Support
            </Typography>
            <StyledLink href="#" color="inherit" display="block">
              Contact Us
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              About Us
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Help Center
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Careers
            </StyledLink>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Policy
            </Typography>
            <StyledLink href="#" color="inherit" display="block">
              Shipping & Returns
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Terms & Conditions
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              Payment Methods
            </StyledLink>
            <StyledLink href="#" color="inherit" display="block">
              FAQ
            </StyledLink>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © 2035 by Company Name
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
