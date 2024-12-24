# Node.js Server Log Race Condition

This repository demonstrates a race condition in a Node.js server where the log message indicating the server has started is printed before the server is actually listening on the specified port.  This can lead to unpredictable behavior if the server attempts to access resources before it's fully initialized.

## Bug Description

The `console.log` statement indicating the server is running is placed before the `server.listen` call.  If the program terminates prematurely (e.g., due to a signal), the log message might be printed even though the server hasn't fully started listening.

## Solution

The solution involves moving the `console.log` statement to within the `server.listen` callback. This ensures the message is printed only after the server is successfully listening on the port.