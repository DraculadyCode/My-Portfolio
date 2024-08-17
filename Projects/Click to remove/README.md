# Click to remove
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


We can enhance the experience of the UI by monitoring click events and by modifying the DOM dynamically. Let's try to apply that here!

## Task

The prepared webpage contains a list of cards. The top right corner of each card has a close button "[X]". When this button is clicked, the corresponding card should be removed from the DOM.

- The [HTML](./index.html) and [CSS](./style.css) have already been prepared for you
- You can use VS Code live server to view the interface

## Requirements

- Write your solution in [script.js](./script.js)
- Do not edit the **HTML** or **CSS**
- On the `click` event, the parent `div` should be removed from the DOM
- You should only register **one** event listener for the click event
- Use event delegation

## Expected Result

![Reference image](./reference.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Delete

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Page contains 3 messages |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | On click on delete button parent message div's are removed |

### Delegation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Only one event listener is used on the page |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=spa-dom-click-to-remove)


[//]: # (autograding info end)