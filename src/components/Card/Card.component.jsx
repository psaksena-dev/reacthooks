import classes from './Card.module.scss';
import React, { Children } from 'react';

const Card = ({ children }) => <div className={classes.Card}>{children}</div>;

export default Card;
