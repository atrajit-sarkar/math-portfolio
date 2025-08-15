## How to calculate Colon Ideals in GCD Domains in particula in UFD Domains
### Theorem: 
Let $R$ be a GCD domain, $I \trianglelefteq R$ and $S \subseteq R$. Moreover let $I=<i_{\alpha}>_{\alpha \in J}$ and $S=\{s_{\beta}\}_{\beta \in K}$ for some index sets $I,K$. Then the following relation holds:

$$
\begin{equation}
\bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J} \subseteq I:S    
\end{equation}
$$

### Corollary:
To find the equality in (1) we have to check is there any element outside $\bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J}$. To find element outside this ideal we can look at non-zero element in $\frac{R}{\bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J}}$. For a non-zero element $x+\bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J}$, it is sufficient to check wheter $x \in I:S$ as corresponding nonzero elements in $R$ will be $x+i$ for all $i\in \bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J}$. But if $x+i \in I:S$ so is $x$. 
Now if we have such $x$ then we have another ideal $\Big<x,\bigcap_{\beta \in K} \Big<\frac{i_{\alpha}}{gcd(i_{\alpha},s_{\beta})}\Big>_{\alpha \in J}\Big> \subseteq I:S$ and repeat the above process. Else, we get the equality.

#### Example:
Let $R=F[x,y]$, $I=<xy^2,x^2y>$ and $S=\{y^2\}$. 
By equation (1) we have,
$\Big<\frac{xy^2}{gcd(xy^2,y^2)}, \frac{x^2y}{gcd(x^2y,y^2)}\Big>=<x,x^2>=<x>\subseteq I:S$

Now, find non-zero element in $\frac{F[x,y]}{<x>}\cong F[y]$. Any non zero element of $F[y]$ is of the form $f(y)$ and taking pre-image under th natural isomorphism ($\phi(f(x,y)+<x>)=f(x,y)(mod \text{  } x)$)

So, $\phi^{-1}(f(y))=f(y)+<x>$.
And hence check whether $f(y) \in I:S$?
$f(y)y^2 \notin I$ as elements in $I$ must have atleast 1 degree in indeterminate $x$. Hence $f(y)=0$ and hence 
$I:S=<x>$