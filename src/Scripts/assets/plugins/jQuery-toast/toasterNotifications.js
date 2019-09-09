function showSuccessToast(notifMsg) {
  $.toast().reset();

  $.toast({
    heading: 'Success',
    text: notifMsg,
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'center',  // Text alignment i.e. left, right or center
    loader: true,  // Whether to show loader or not. True by default
    loaderBg: '#9EC600',  // Background color of the toast loader
    beforeShow: function () { }, // will be triggered before the toast is shown
    afterShown: function () { }, // will be triggered after the toat has been shown
    beforeHide: function () { }, // will be triggered before the toast gets hidden
    afterHidden: function () { }  // will be triggered after the toast has been hidden
  });
}

function showErrorToast(notifMsg) {
  $.toast().reset();

  $.toast({
    heading: 'Error',
    text: notifMsg,
    icon: 'error', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'center',  // Text alignment i.e. left, right or center
    loader: true,  // Whether to show loader or not. True by default
    loaderBg: '#9EC600',  // Background color of the toast loader
    beforeShow: function () { }, // will be triggered before the toast is shown
    afterShown: function () { }, // will be triggered after the toat has been shown
    beforeHide: function () { }, // will be triggered before the toast gets hidden
    afterHidden: function () { }  // will be triggered after the toast has been hidden
  });
}

function showWarningToast(notifMsg) {
  $.toast().reset();

  $.toast({
    heading: 'Warning',
    text: notifMsg,
    icon: 'warning', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'center',  // Text alignment i.e. left, right or center
    loader: true,  // Whether to show loader or not. True by default
    loaderBg: '#9EC600',  // Background color of the toast loader
    beforeShow: function () { }, // will be triggered before the toast is shown
    afterShown: function () { }, // will be triggered after the toat has been shown
    beforeHide: function () { }, // will be triggered before the toast gets hidden
    afterHidden: function () { }  // will be triggered after the toast has been hidden
  });
}

function showInfoToast(notifMsg) {
  $.toast().reset();
  $.toast({
    text: notifMsg, // Text that is to be shown in the toast
    heading: 'Information', // Optional heading to be shown on the toast
    icon: 'info', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left',  // Text alignment i.e. left, right or center
    loader: true,  // Whether to show loader or not. True by default
    loaderBg: '#9EC600',  // Background color of the toast loader
    beforeShow: function () { }, // will be triggered before the toast is shown
    afterShown: function () { }, // will be triggered after the toat has been shown
    beforeHide: function () { }, // will be triggered before the toast gets hidden
    afterHidden: function () { }  // will be triggered after the toast has been hidden
  });
}

//custom toast
//$.toast({
//  text: 'Triggers the events',

//  beforeShow: function () {
//    alert('The toast is about to appear');
//  },

//  afterShown: function () {
//    alert('Toast has appeared.');
//  },

//  beforeHide: function () {
//    alert('Toast is about to hide.');
//  },

//  afterHidden: function () {
//    alert('Toast has been hidden.');
//  }
//})