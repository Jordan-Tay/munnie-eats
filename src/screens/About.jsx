import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";
import facebook from "react-useanimations/lib/facebook";
import profile from "../images/profile.jpg";

export const About = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ height: md ? 'calc(100vh - 82px)' : 'auto', width: '100%', top: 0, boxSizing: 'border-box' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} sm={6}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
              <img style={{ objectFit: 'cover', display: 'block', height: '100%', width: '100%' }} src={profile} alt='profile' />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ margin: '40px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
              <h2 style={{ textAlign: 'center' }}>Hello!</h2>
              <p style={{ fontSize: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p style={{ fontSize: '20px' }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed consequat dapibus lobortis. Aliquam auctor purus quis purus aliquet, vel dictum risus finibus.
              </p>
              <div style={{ display: 'flex', marginTop: '40px' }}>
                <a 
                  href='https://www.instagram.com/munnie_eats/?hl=en-gb'
                  className='circular-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <UseAnimations 
                    wrapperStyle={{cursor: 'pointer'}}
                    animation={twitter} 
                    size={42} 
                  />
                </a>
                <a 
                  href='https://www.instagram.com/munnie_eats/?hl=en-gb'
                  className='circular-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <UseAnimations 
                    wrapperStyle={{cursor: 'pointer'}}
                    animation={facebook} 
                    size={42} 
                  />
                </a>
                <a 
                  href='https://www.instagram.com/munnie_eats/?hl=en-gb'
                  className='circular-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <UseAnimations 
                    wrapperStyle={{cursor: 'pointer'}}
                    animation={instagram} 
                    size={42} 
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
