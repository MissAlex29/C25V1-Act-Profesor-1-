//Clase (molde) para objeto de suelo
class Ground {
    constructor(x,y,width,height) {//Constructor con argumentos 
      var options = {//Opciones del motor físico para el objeto
          isStatic: true
      }
      //Crear objeto en este mundo usando BODIES 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      //Agregamos este objeto al mundo que estamos creando
      World.add(world, this.body);
    }
    display(){//Función para mostrar objeto
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown"); 
      rect(pos.x, pos.y, this.width, this.height);
    }
  };