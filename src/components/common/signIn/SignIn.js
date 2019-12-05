import React from "react";
import Logo from "../../reusable/common/logo";
import svg from "../../../assets/icons/logo/speedometer.svg";
import {
  TextField,
  Typography,
  Button,
  IconButton,
  Icon,
  InputAdornment,
  Tooltip
} from "@material-ui/core";
import { ReCaptcha } from "react-recaptcha-v3";
import { auth } from "../../../services/firebase/structural";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */

const SignIn = React.memo(props => {
  const { classes, onSignIn, onChange, showPassword, isValid } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Logo classes={classes} src={svg} />
      </div>
      <Typography
        variant="h6"
        align="center"
        color="secondary"
        className={classes.title}
      >
        Agildash
      </Typography>
      <form autoComplete="on" onSubmit={onSignIn}>
        <TextField
          name="email"
          label={"Username"}
          onChange={onChange}
          fullWidth
          type="email"
          required
          margin="normal"
        />
        <TextField
          name="password"
          label={"Password"}
          onChange={onChange}
          fullWidth
          type={showPassword ? "text" : "password"}
          required
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    onChange({
                      currentTarget: {
                        value: !showPassword,
                        name: "showPassword"
                      }
                    })
                  }
                  edge="end"
                >
                  <Tooltip placement="top" title={"Mostrar/esconder senha"}>
                    <Icon>
                      {showPassword ? "visibility" : "visibility_off"}
                    </Icon>
                  </Tooltip>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          fullWidth
          disabled={!isValid}
          className={classes.button}
          type="submit"
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <ReCaptcha
        sitekey="6LfpvL4UAAAAACW_RvCn4VcJvoBifyMWiPH4V6uj"
        action="homepage"
      />
      <Button
        onClick={() => {
          console.log(auth.currentUser);
        }}
        className={classes.passButton}
        color="primary"
      >
        Esqueci minha senha
      </Button>
    </div>
  );
});

export default SignIn;
