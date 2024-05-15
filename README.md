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
<img width="744" alt="image" src="https://github.com/Experimenters1/Render-text-with-URLs-highlighted-React-native-/assets/64000769/108f05c7-43ba-4f72-8e31-a26211af31e2">








