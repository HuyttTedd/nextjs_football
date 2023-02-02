import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styles from '../../styles/profile/tabs.module.scss';

function Tabs() {
  return (
    <span className={styles['tab-container']}>
        <a className={styles['test']}>Left</a>
        <a>Middle</a>
        <a>Test1</a>
    </span>
  )
}

export default Tabs