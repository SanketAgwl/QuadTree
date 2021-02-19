 function setup()
{
    createCanvas(800, 800);
   
    let boundary= new Rectangle(400, 400, 400, 400);
    qt = new QuadTree(boundary, 4);

    for(i=0; i<Math.floor(Math.random() * 5000) ; i++)
    {
        let p =new Point(random(width), random(height));
        qt.insert(p);
    }

    background(0);
    qt.show();

}
