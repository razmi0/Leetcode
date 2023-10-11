# LeetCodes

<br><br>

# Exploration

## Bubble Sort Observations

- Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

### Benchmarking with perfSync

<ul>Loops :
<li>do..while : </li>
<pre>
    Function             : bubbleSort
    Total Runtime        : 137.45 ms
    Average Runtime/Fn   : 137.45 ns
    SD                   : ± 663.55 ns
    ---
    Total Heap used      : -5292032 bytes
    Average Heap used/Fn : -5.292032 bytes
    SD                   : ± 3.6636890165069578 kb
    ---
    Performed            : 1000000 times
    Last Result          : 0,2,2,2,3,4,4,5,5,6,7,8,8,8,9
</pre>
<li>while : </li>
<pre>
    Function             : bubbleSort2
    Total Runtime        : 119.85 ms
    Average Runtime/Fn   : 119.85 ns
    SD                   : ± 770.63 ns
    ---
    Total Heap used      : 8.192 kb
    Average Heap used/Fn : 0.008192 bytes
    SD                   : ± 8.191995903908433 bytes
    ---
    Performed            : 1000000 times
    Last Result          : 0,2,2,2,3,4,4,5,5,6,7,8,8,8,9
</pre>
<li> for loop : </li>
<pre>
    Function             : bubbleSort3
    Total Runtime        : 325.24 ms
    Average Runtime/Fn   : 325.24 ns
    SD                   : ± 20.65 μs
    ---
    Total Heap used      : 0 bytes
    Average Heap used/Fn : 0 bytes
    SD                   : ± 0 bytes
    ---
    Performed            : 1000000 times
    Last Result          : 0,2,2,2,3,4,4,5,5,6,7,8,8,8,9
</pre>
</ul>

_Conclusion :_ <br>
The for loop is the slowest, while the do..while loop is the fastest. <br>
Heap measurement seems to not be relevant. I need further investigation about GC and nodeJs memory API.

## ImageSmoother Observations

- Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

### Benchmarking with perfSync

<ul>Loops :
<li>do..while : </li>
<pre>
    Function             : imageSmoother6
    Description          :  refacto do while version
    ---
    Total Runtime        : 105.76 ms
    Average Runtime/Fn   : 1.06 μs
    SD                   : ± 2.55 μs
    ---
    Total Heap used      : -704512 bytes
    Average Heap used/Fn : -7.04512 bytes
    SD                   : ± 1.7618373564593848 kb
    ---
    Performed            : 100000 times
    Last Result          : 137,141,137,141,138,141,137,141,137
</pre>
<li>while : </li>
<pre>
    Function             : imageSmoother5
    Description          :  refacto while version
    ---
    Total Runtime        : 113.51 ms
    Average Runtime/Fn   : 1.14 μs
    SD                   : ± 2.94 μs
    ---
    Total Heap used      : -274432 bytes
    Average Heap used/Fn : -2.74432 bytes
    SD                   : ± 880.8738324582714 bytes
    ---
    Performed            : 100000 times
    Last Result          : 137,141,137,141,138,141,137,141,137
</pre>
<li> for loop : </li>
<pre>
    Function             : imageSmoother4
    Description          :  refacto for version
    ---
    Total Runtime        : 111.81 ms
    Average Runtime/Fn   : 1.12 μs
    SD                   : ± 2.79 μs
    ---
    Total Heap used      : -1257472 bytes
    Average Heap used/Fn : -12.57472 bytes
    SD                   : ± 2.7648472555957975 kb
    ---
    Performed            : 100000 times
    Last Result          : 137,141,137,141,138,141,137,141,137
</pre>
</ul>

_Conclusion :_ <br>
The for loop is the slowest, while the do..while loop is the fastest. <br>
Again, heap measurement seems to not be relevant. I need further investigation about GC and nodeJs memory API.
