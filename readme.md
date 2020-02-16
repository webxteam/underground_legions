**Underground Legions**

It's a project where the main goal is learn more about design patterns, typescript and nodejs applications.
It'll be a role-playing game where I'll write a lot of classes with rules about the game.
Let's go to learn a lot right now.

**Get started:**

Firstly it's necessary to configure an environment to run this application, so please, follow this steps here:

1. On project main directory, run this:
```
make build
```
3. Start the docker environment (services):
```
make start
```
5. Check if is working accessing this address with your browser:
> localhost:4001/health

6. You can finish and turn off the container with this command:
```
make down
```

**Compiled app:**

It's possible to generate the compiled app that will be executed by native node.
Execute this command to generate the compiled app:
```
make build-production-app
```