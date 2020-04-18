let canvas = document.getElementById("canvas"),
    button = document.getElementById("button"),
    create = document.getElementById("create"),
    canvasContent = canvas.getContext("2d"),
    radius = 10,
    hairetu = [],
    width = window.innerWidth,
    height = window.innerHeight,
    number = 2,
    maxLife = 500,
    flag = true;

    canvas.width = width;
    canvas.height = height;


    window.addEventListener("resize",function resize() {
        Width = this.window.innerWidth;
        height = this.window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
    });

    button.addEventListener("click",function(){
        if(flag){
            flag = false;
            button.value = "檻をつける";
        }else{
            flag = true;
            button.value = "檻を外す";
        }
    });

    create.addEventListener("click",createAnimal);

    function Animal(canvasContent, positionX,positionY){
        this.canvasContent = canvasContent;
        this.initialize(positionX,positionY);
    }

    Animal.prototype.initialize = function(positionX,positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.startLife = Math.ceil(maxLife * Math.random());
        this.Life = this.startLife;
        if(Math.ceil(Math.random() * 10) === 1){
            this.color = {
                r:0,
                g: Math.floor(Math.random() * 255),
                b: Math.floor(Math.random() * 255), 
                a: 1
            };
            this.velocity = {
                x:Math.random() * 10,
                y:Math.random() * 10,
            };
            this.rare = 1;
        } else {
            this.color = {
                r: 200,
                g: 0,
                b: 0,
                a: 1
            };
            this.velocity = {
                x: Math.random() * 8,
                y: Math.random() * 8
            };
            this.rare = 0;
        }
    };

    function render() {
        canvasContent.clearRect(0,0,width,height);
        canvasContent.globalCompositeOperation = "lighter";
        hairetu.forEach(function(obj){
            obj.render();
        });
        requestAnimationFrame(render);
    }

    Animal.prototype.render = function() {
        this.draw();
        this.updatePosition();
        this.updateParams();
        if(flag) {
            this.limitPosition();
        } else {
            this.connectPosition();
        }
    };

    Animal.prototype.draw = function(){
        ctx = this.canvasContent;
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY,radius,Math.PI * 2,false);
        ctx.fillStyle = this.updateParams();
        ctx.fill;
        ctx.fill();
        ctx.closePath();
    };

    Animal.prototype.updatePosition = function() {
        this.positionX += this.velocity.x;
        this.positionY += this.velocity.y;
        var ratio = this.life / this.starLife;
        this.color.a = 1 + ratio;
        this.life -= 1;
      };
      
      Animal.prototype.updateParams = function() {
        var col = this.color.r + ", " + this.color.g + ", " + this.color.b;
        var g = this.canvasContext.createRadialGradient(
          this.positionX,
          this.positionY,
          0,
          this.positionX,
          this.positionY,
          radius
        );
        g.addColorStop(0, "rgba(" + col + ", " + this.color.a * 1 + ")");
        g.addColorStop(0.5, "rgba(" + col + ", " + this.color.a * 0.8 + ")");
        g.addColorStop(1.0, "rgba(" + col + ", " + this.color.a * 0 + ")");
        return g;
      };
      
      Animal.prototype.limitPosition = function() {
        if (this.positionX > width - radius || 0 >= this.positionX - radius)
          this.velocity.x = -this.velocity.x;
        if (this.positionY > height - radius || 0 >= this.positionY - radius)
          this.velocity.y = -this.velocity.y;
      };
      
      Animal.prototype.connectPosition = function() {
        if (this.positionX < 0) this.positionX = width;
        if (this.positionX > width) this.positionX = 0;
        if (this.positionY < 0) this.positionY = height;
        if (this.positionY > height) this.positionY = 0;
      };
      
      //______________実行__________________________
      function createAnimal() {
        var startPositionX = Math.random() * width,
          startPositionY = Math.random() * height;
        if (0 > startPositionX - radius) startPositionX += radius;
        if (startPositionX >= width - radius) startPositionX -= radius;
        if (0 > startPositionY - radius) startPositionY += radius;
        if (startPositionY >= height - radius) startPositionY -= radius;
        obj = new Animal(canvasContext, startPositionX, startPositionY);
        hairetu.push(obj);
        if (obj.rare === 1) alert("希少種が生まれました！");
      }
      
      for (var i = 0; i < number; i++) {
        createAnimal();
      }
      
      render();


