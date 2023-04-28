import sunIconSrc from '../../assets/img/sun.svg';
import moonIconSrc from '../../assets/img/moon.svg';

import '../../css/switch.css';

const SwitchBtn = (props) => {
  return (
    <div className='switch'>
      <img className='switchIconLeft'
        src={sunIconSrc}
        alt='light mode icon'
      />
      <button className='switchButton'
        data-active-theme={props.activeTheme}
        onClick={props.onChangeTheme}
      >
        <span className='switchButtonIcon'></span>
      </button>
      <img className='switchIconRight'
        src={moonIconSrc}
        alt='dark mode icon'
      />
    </div>
  );
};

export default SwitchBtn;

