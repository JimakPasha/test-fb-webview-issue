import React from 'react';

// Defaults from stellar-funnel buttonDefaultProps + Attached container (new screen)
const buttonElemStyles: React.CSSProperties = {
    width: '100%',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '0px',
    paddingRight: '0px',
    backgroundColor: '#111111',
    borderWidth: 0,
    borderRadius: '16px',
    boxShadow: 'none',
  }
  
  const buttonTextStyles: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'inherit',
    lineHeight: '150%',
    justifyContent: 'center',
    textAlign: 'center',
  }
  
  const attachedContainerStyles: React.CSSProperties = {
    marginTop: 'auto',
    marginBottom: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    order: 10000,
    position: 'sticky',
    bottom: '16px',
    zIndex: 2,
    flexShrink: 0,
  }

export const Bla = () => {

  // React.useEffect(() => {
    
  //     function setVH() {
  //         document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
  //       }
        
  //       setVH();
  //       window.addEventListener('resize', setVH);

  // }, []);


  return  (
    <div
  style={{
    padding: '0px 0px 0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'var(--vh)',
    height: 'var(--vh)',
    backgroundColor: 'gray',
  }}
>
  <div id="animated-root-content">
    <div className="root-default-zone">
      <div>LOGO</div>
      <div>ATTEMPT</div>
      <div>ATTEMPT</div>
      <div>ATTEMPT</div>
      <div>STYLES MAGIC</div>
      <div>==============++++++++++================================</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>

      <div style={attachedContainerStyles}>
        <div style={{ display: 'flex' }}>
          <button
            type="button"
            className="button contained button-wide"
            style={{ ...buttonElemStyles, ...buttonTextStyles }}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
};