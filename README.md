# Render-text-with-URLs-highlighted-React-native-
## Render text with URLs highlighted React-native 
### TypeScript - String split()

This method splits a String object into an array of strings by separating the string into substrings.<br><br>
Trong **TypeScript**, **split()** là một phương thức của đối tượng chuỗi **(string)**. Phương thức này được sử dụng để tách một chuỗi thành một mảng các phần dựa trên một dấu phân cách được chỉ định. <br><br>
Cú pháp của phương thức **split()** trong **TypeScript** là: <br><br>

```typescript
split(separator: string | RegExp, limit?: number): string[];

```

+ ) **separator:** Tham số này chỉ định ký tự hoặc biểu thức chính quy được sử dụng để tách chuỗi. Nếu đó là một chuỗi, nó sẽ được sử dụng như một dấu phân cách để tách chuỗi. Nếu đó là một biểu thức chính quy, chuỗi sẽ được tách tại mỗi vị trí mà mẫu khớp. <br><br>
+ ) **limit (tùy chọn):** Tham số này chỉ định một giới hạn về số lượng phân tách được tìm thấy. Giá trị mặc định là undefined, có nghĩa là tất cả các phân tách đều được thực hiện. <br><br>

```typescript
import React from 'react';

const App: React.FC = () => {
  const str: string = "Hello World";
  const parts: string[] = str.split(" ");
  console.log(parts); // In ra ["Hello", "World"]

  return null; // Không render bất kỳ thứ gì
};

export default App;

```

**Kết quả :** <br><br>
<img width="744" alt="image" src="https://github.com/Experimenters1/Render-text-with-URLs-highlighted-React-native-/assets/64000769/108f05c7-43ba-4f72-8e31-a26211af31e2"> <br><br>

### TypeScript Map
In **TypeScript, .map()** is a method of arrays used to create a new **array** by calling a **callback** function for each element of the original **array** and returning the result of the **callback** function for each element. <br><br>
Trong **TypeScript**, **.map()** là một phương thức của mảng **(array)** được sử dụng để tạo ra một mảng mới bằng cách gọi một hàm **callback** cho mỗi phần tử của mảng gốc và trả về kết quả của hàm **callback** cho mỗi phần tử. <br><br>

Cú pháp của phương thức .map() như sau: <br><br>

```typescript
array.map(callback(currentValue, index, array), thisArg?)

```

+ ) **callback:** Hàm được gọi cho mỗi phần tử của mảng, nhận ba tham số:
+ ) **currentValue:** Giá trị của phần tử hiện tại được xử lý.
+ ) **array:** Mảng mà phần tử đang được xử lý.
+ ) **thisArg** (tùy chọn): Giá trị được sử dụng làm this khi gọi hàm **callback.**

Phương thức **.map()** trả về một mảng mới với các giá trị được trả về từ hàm **callback** cho mỗi phần tử tương ứng trong mảng gốc.

Ví dụ:

```typescript
import React from 'react';

const App: React.FC = () => {

  const numbers: number[] = [1, 2, 3, 4, 5];
const squaredNumbers: number[] = numbers.map((num) => num * num);

console.log(squaredNumbers); // In ra: [1, 4, 9, 16, 25]


  return null; // Không render bất kỳ thứ gì
};

export default App;
```











```typescript
import React from 'react';

const App: React.FC = () => {

const numbers: number[] = [1, 2, 3, 4, 5];
const squaredNumbers: number[] = numbers.map((num) => num * num);

console.log(squaredNumbers); // In ra: [1, 4, 9, 16, 25]


  return null; // Không render bất kỳ thứ gì
};

export default App;

```







