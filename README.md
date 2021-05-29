# Pseudo-3d-Racer
This repository contains the source code of my racing game prototype.

Divided into several parts, this project shows how to create a complete retro-style arcade game like Outrun from scratch, step by step.  
It's an old school pseudo 3d racer, where your goal is to drive a car, as fast as possible through heavy traffic.

The game is programmed in Javascript using [Phaser 2 framework](http://phaser.io/).

Visit official website:  
https://www.askforgametask.com

Visit my Youtube channel:  
https://www.youtube.com/channel/UCj51CLgyTsILVHbGL6wvQeg


## Part 1 - Straight Road
This part covers the following topics:
- initializing a new Phaser game
- creating the main game loop
- implementing 3d projection
- building a straight road
- rendering the road

Watch the video (episode 1):  
https://youtu.be/6td_zpQC1U4


## Part 2 - Adding Player
This part covers the following topics:
- creating the Player class
- updating the camera to follow the player
- adding a clipping line to render only segments above it
- making the road to correctly loops back

Watch the video (episode 2):  
https://youtu.be/ZV23PaCSyS8


## How to run the game

Since the game is written in Javascript, it runs directly in a web browser.  
To run it locally on your computer, you need a local web server.

Here are the instructions how to use the XAMPP web server to run this game (if you already have some server installed on your computer then skip to the step 3):
1. install XAMPP on your computer (for instance in **C:\Xampp** folder)
2. configure and run the server (read the server's manual or help if you don't know how to do that)
3. navigate to the server document root: **C:\Xampp\htdocs**
4. create a new folder called 'pseudo3d_racer': **C:\Xampp\htdocs\pseudo3d_racer**
5. download the project from this repository
6. copy all files directly in **C:\Xampp\htdocs\pseudo3d_racer**
7. now you should have the following folder structure:  
  **C:\Xampp\htdocs\pseudo3d_racer**  
    - **\source**  
      - **\assets** 
      - **\libs**  
      - **\part1**  
8. to run the part 1, open a web browser and navigate to  
  **http\://localhost:\<port\>/pseudo3d_racer/source/**

