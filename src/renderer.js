/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

document.addEventListener('DOMContentLoaded', function() {
    var signInForm = document.querySelector('form');
    var signUpForm = document.querySelectorAll('form')[1];

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log('Sign In Data:', { email: email, password: password });
    });

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('newname').value;
        var email = document.getElementById('newemail').value;
        var password = document.getElementById('newpassword').value;
        console.log('Sign Up Data:', { name: name, email: email, password: password });
    });
});
