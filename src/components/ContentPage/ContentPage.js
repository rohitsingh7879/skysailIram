import React from 'react';
import { TextField, Grid, InputAdornment } from '@mui/material';
import { Person, Event, Schedule, Place, Palette, AttachMoney, People, Phone, Email, } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import './ContentPage.css';

const iconStyle = { color: '#E0DFFE' }; 

const ContentPage = () => {
  return (
    <div className="content-page">
      <h2>ENQUIRY FORM</h2>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Client's Name"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Status"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Event"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Event style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              type="date"
              label="Event Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Event style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              type="time"
              label="Event Time"
              InputLabelProps={{ shrink: true }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Schedule style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Venue A"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Venue B"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Lead Florist"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Colours"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Palette style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Budget"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoney style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Guest Numbers"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <People style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              type="date"
              label="Consultation Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Consultation Method"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Consultation Venue"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Client Phone"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Client Email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Contact at Venue"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Venue Email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              label="Venue Phone"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone style={iconStyle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Notes"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ReceiptIcon style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContentPage;
