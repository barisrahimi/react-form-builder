import React from 'react'
import ReactDOM from 'react-dom'
const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className='fixed z-10 inset-0 overflow-y-auto'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0'>
              <div
                onClick={hide}
                className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                aria-hidden='true'
              ></div>

              <div className='absolute top-0 right-0 left-0 mx-auto m-5 sm:m-8 rounded-lg md:m-16'>
                <div>
                  <div
                    className='fixed inset-0 flex z-40 lg:hidden'
                    role='dialog'
                    aria-modal='true'
                  >
                    <div className='fixed inset-0 bg-black bg-opacity-25' aria-hidden='true'></div>
                  </div>

                  {children}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null

export default Modal
