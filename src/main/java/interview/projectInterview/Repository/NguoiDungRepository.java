package interview.projectInterview.Repository;

import interview.projectInterview.Models.NguoiDung;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NguoiDungRepository extends JpaRepository<NguoiDung,Long> {
    Page<NguoiDung> findByHoTenContainingIgnoreCase(String hoTen , Pageable pageable);
}
