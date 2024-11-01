<div align="center">

## Toy Robot Simulator 🤖

-- Code challenge -- 💻

It is configured to experience fast development and build speed using **[Vite](https://vitejs.dev)** bundler. As a bonus, it includes several React utilities and layout configurations.

</div>

## Description

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

The application should be able to accept any one of the following commands via a multi-line text input, ether individually or pasted in on separate lines:

```shell
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

- The origin (0,0) can be considered to be the SOUTH WEST most corner.

- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the table should ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

Constraints:

- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be handled appropriately.

Here are some examples of possible input/output:

```shell
PLACE 0,0,NORTH MOVE REPORT Output: 0,1,NORTH
```

```shell
PLACE 0,0,NORTH LEFT REPORT Output: 0,0,WEST
```

```shell
PLACE 1,2,EAST MOVE MOVE LEFT
MOVE REPORT Output: 3,3,NORTH
```

## Features

- ⚡️Added Field size customization
- 🕹️ Added buttons to rotate and move the robot across the field
- 📝Added a text field to show the commands
- 🎨Added Material UI for the layout
- 🚀 Deployed on Netlify

## Live Demo 🚀

[Toy Robot Simulator](https://gbdcp-toy-robot-simulator.netlify.app/)

## Screenshot 📸

![Screenshot](/public/images/screenshot.png)

![Screenshot](/public/images/screenshot2.png)

## Components

- **For compile & build**

  - `vite`

- **For web development framework**

  - `react`
  - `react-dom`
  - `typescript`

- **For CSS Design**

  - `@mui/material` (Material Design CSS Framework)
  - `@emotion/react`

- **For development utils**

  - `eslint` (Code syntax checking)
  - `eslint-plugin-react-hooks`
  - `prettier`

- **For testing**

  - `Vitest`

## Installation

Clone this repo using below command.

```shell
$ git clone git@github.com:GaboBDCP/toy-robot-simulator.git
```

Then, install the dependency module.

```shell
# via npm
$ npm i

# via yarn (https://yarnpkg.com)
$ yarn install

# via pnpm (https://pnpm.io)
$ pnpm i
```

## Usage

You can test your project in the development environment using the following command:

```shell
$ npm run dev
```

## Testing

```shell
$ npm run test
```

## Build

```shell
$ npm run build
```

> [gabrielbotana.dev](https://www.gabrielbotana.dev) &nbsp;&middot;&nbsp; GitHub [@GaboBDCP](https://github.com/GaboBDCP) &nbsp;&middot;&nbsp; Twitter [@Gabo_bdcp](https://x.com/Gabo_bdcp)
