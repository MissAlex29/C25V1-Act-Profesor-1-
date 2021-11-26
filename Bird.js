//Clase (molde) para objeto del ave
class Bird {
    constructor(x, y) { //Constructor con argumentos fijos 
        var options = {//Opciones del motor físico para el objeto
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        //Crear objeto en este mundo usando BODIES 
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        
        //Agregamos este objeto al mundo que estamos creando
        World.add(world, this.body);
      }
      display(){//Función para mostrar objeto
        //Almacenamos la posición del objeto
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        //Agregamos ángulo a nuestro cuerpo
        var angle = this.body.angle;
        push(); //Push captura la nueva posición 
        translate(pos.x, pos.y);//Cambia la posición en el eje Y y X
        rotate(angle);//Cambia la rotación del cuerpo
        rectMode(CENTER);
        strokeWeight(4); //Agregamos borde a la caja 
        stroke("blue"); //Color de borde 
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();//Vuelve a la posición anterior 
      }
}