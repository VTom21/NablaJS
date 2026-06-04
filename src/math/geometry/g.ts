//Two-dimensional shapes

export function Square(){ 
    function area(a: number){
        return a * a;        
    }

    function perimeter(a: number){
        return 4 * a;        
    }

    return {area, perimeter}
}

export function Rectangle(){
    function area(a: number, b:number){
        return a * b
    }
    function perimeter(a: number, b:number){
        return 2 * (a + b)
    }

    return {area, perimeter}
}

export function Circle(){
    function area(r: number){
        return Math.PI * Math.pow(r, 2)
    }

    function diameter(r: number){
        return r * 2
    }

    function circumference(r: number){
        return 2 * r * Math.PI
    }

    return {area, diameter, circumference}
}

export function Triangle(){
    function area(b: number, h: number){
        return (b * h) / 2
    }
    function perimeter(a: number, b: number, c: number){
        return a + b + c
    }

    return {area, perimeter}
}

export function Trapezoid(){
    function area(a: number, b: number, h: number){
        return ((a + b) / 2) * h
    }

    return {area}
}

export function Ellipse(){
    function area(a: number, b:number){
        return Math.PI * a * b
    }

    return {area}
}


//Three-dimensional shapes

export function Cube(){
    function volume(a: number){
        return Math.pow(a, 3);
    }
    return{volume}
}

export function Cone(){
    function volume(r: number, h: number){
        return 1/3 * Math.PI * Math.pow(r, 2) * h
    }

    function slant_height(r: number, h: number){
        return Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
    }

    function surface_area(r: number, h: number){
        var left = Math.PI * Math.pow(r, 2)
        var right = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
        return left + right
    }

    return {volume, slant_height, surface_area}
}

export function Cylinder(){
    function volume(r: number, h: number){
        return Math.PI * Math.pow(r, 2) * h
    }
    function diameter(r: number){
        return r * 2
    }
    function surface_area(r: number, h: number){
        var top_bottom = Math.PI * Math.pow(r, 2)
        var lateral = 2 * Math.PI * r * h

        return lateral + 2 * top_bottom
    }
    return {volume, diameter, surface_area}
}

export function Sphere(){
    function volume(r: number){
        return 4/3 * Math.PI * Math.pow(r, 3)
    }
    function surface_area(r: number){
        return  4 * Math.PI * Math.pow(r, 2)
    }
    function circumference(r: number){
        return 2 * Math.PI * r
    }
    return {volume, surface_area, circumference}
}

export function Cuboid(){
    function volume(l: number, w: number, h: number){
        return l * w * h
    }
    function surface_area(l: number, w: number, h: number){
        return 2 * ((l * w) + (l * h) + (w * h))
    }
    function diagonal(l: number, w: number, h: number){
        return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2) + Math.pow(h, 2))
    }

    return {volume, surface_area, diagonal}
}

export function Prism(){
    function volume(a: number, b: number, c:number, h:number){
        var left = 1 / 4 * h
        var right = Math.sqrt((a + b + c) * (b + c - a) * (c + a - b) * (a + b - c));
        return left * right
    }
    function height(a: number, b: number, c: number, V: number){
        var top = 4 * V
        var bottom = Math.sqrt((a + b + c) * (b + c -a) * (c + a - b) * (a + b - c));
        return top / bottom
    }

    return{volume, height}
}

export function Tetrahedron(){
    function volume(a: number){
        return (Math.pow(a, 3)) / (6 * Math.sqrt(2))
    }   
    function height(l: number){
        return ((Math.sqrt(6)) / (3)) * l 
    }
    return{volume, height}
}

export function Hemisphere(){
    function volume(r: number){
        return Sphere().volume(2) / 2
    }
    function diameter(r: number){
        return r * 2
    }
    function surface_area(r: number){
        return 3 * Math.PI * Math.pow(r, 2)
    }
    function cap_area(r: number){
        return 2 * Math.PI * Math.pow(r, 2)
    }
    return {volume, diameter, surface_area, cap_area}
}

export function Torus(){
    function volume(i: number, o:number){
        return (Math.PI * Math.pow(i, 2)) * (2 * Math.PI * o) 
    }
    function surface_area(i: number, o:number){
        return Math.pow(Math.PI, 2) * (o - i) * (o + i)
    }

    return {volume, surface_area}
}

export function Paraboloid(){
    function volume(a: number, b: number){
        return 1/2 * Math.PI * Math.pow(b, 2) * a
    }
    return {volume}
}

export function Hyperboloid(){
    
    function volume(a: number, b:number, h:number) {
        return Math.PI * h * Math.pow(a, 2) * (1 + (Math.pow(h, 2) / (12 * Math.pow(b, 2))))
    }

    return {volume}
}