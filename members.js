let pg_list={
    Name:"sree",
    dob:"1999-01-01",
    pg_name:["sv","svs","svss"],
    pg_id:[1,2,3],
    pg_count:function(){
        return this.pg_id.length;
        console.log(this.pg_id.length);
        console.log(this.pg_name.length);
    }
}
console.log(pg_list);
console.log("pg Names Are:",pg_list.pg_name);

console.log(pg_list.dob);
pg_list.pg_count;


console.log(this)

console.log(this.pgname);