//Clase (molde) para objeto de la madera
class Log {
    constructor(x, y, height, angle) { //Constructor con argumentos 
        var options = {//Opciones del motor físico para el objeto
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //Crear objeto en este mundo usando BODIES 
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
        
        //establecemos angulo del objeto
        Matter.Body.setAngle(this.body, angle);
        
        //Agregamos este objeto al mundo que estamos creando
        World.add(world, this.body);
      }
      display(){//Función para mostrar objeto
        //Almacenamos la posición del objeto
        var pos =this.body.position;
        //Agregamos ángulo a nuestro cuerpo
        var angle = this.body.angle;
        push(); //Push captura la nueva posición 
        translate(pos.x, pos.y);//Cambia la posición en el eje Y y X
        rotate(angle);//Cambia la rotación del cuerpo
        rectMode(CENTER);
        strokeWeight(4); //Agregamos borde a la madera 
        stroke("green"); //Color de borde 
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();//Vuelve a la posición anterior 
      }
}