import styles from '../../styles/profile/tabs.module.scss';
import { useWindowSize } from '../utils/ScreenSize';
import { Popover, Button, Text } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faList,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Tabs() {
  const size = useWindowSize();

  return (
    size.width > 578 ? 
    <span className={styles['tab-container']}>
        <a className={styles['sticky-selected']}>Left</a>
        <a>Middle</a>
        <a>Test1</a>
        <span>{size.width}px / {size.height}px</span>
    </span>
    :
    <span className={styles['tab-container']}>
        <a className={styles['sticky-selected']}>Left</a>
        <Popover disableAnimation>
          <Popover.Trigger>
            <Button animated={false} auto flat color="light">
              View More 
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 16, color: "black", marginLeft: 10 }}
              />
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>This is the content of the popover. </Text>
          </Popover.Content>
        </Popover>
    </span>
  )
}

export default Tabs