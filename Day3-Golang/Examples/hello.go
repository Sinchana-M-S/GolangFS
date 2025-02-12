package main

import "fmt"

type student struct{
	Name string
	Regno float64
	Dept string
}

func main(){
	// message:= "Hello world!"
	// fmt.Println(message)
	
	// var num1,num2 int
	// fmt.Print("Enter 2 nos:")
	// fmt.Scan(&num1,&num2)
	// sum:=num1+num2
	// fmt.Println(sum)

	// ifelseDemo()
	// large()
	// forThreeVarDemo()
	// forCondiDemo()
	// forPythonStyle()

	st:=student{"Joe",25,"CSE"}
	fmt.Println("Name:",st.Name,"\nRegno:",st.Regno,"\nDept:",st.Dept)
}

func ifelseDemo(){
	var age int
	fmt.Print("Enter age:")
	fmt.Scanln(&age)
	if age>18{
		fmt.Println("Adult")
	} else{
		fmt.Println("Minor")
	}
}

func large(){
	var a,b int
	fmt.Print("Enter first no:")
	fmt.Scanln(&a)
	fmt.Print("Enter second no:")
	fmt.Scanln(&b)
	if a>b{
		fmt.Printf("%d is greater",a)
	} else{
		fmt.Printf("%d is greater",b)
	}
}

func forThreeVarDemo(){
	sum:=0
	for i:=0;i<5;i++{
		sum+=i
	}
	fmt.Printf("Sum is:%d",sum)
}

func forCondiDemo(){
	n:=1
	for n<5{
		n*=2
	}
	fmt.Printf("Result is:%d",n)
}

func forPythonStyle(){
	strings:=[]string{"hello","world","Golang","NIE"}
	for _,s:=range strings{
		fmt.Println(s)
	}
}

