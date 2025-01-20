package interview.projectInterview.Repository;

import interview.projectInterview.Models.Lop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LopRepository extends JpaRepository<Lop, Long> {
    Page<Lop> findByTenLopContainingIgnoreCase(String searchString, Pageable pageable);
}
